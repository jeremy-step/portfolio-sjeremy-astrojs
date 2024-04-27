<?php

declare(strict_types=1);

use Nette\Forms\Form;
use Tracy\Debugger;
use Nette\Utils\Strings;
use Nette\Forms\Validator;

header('Access-Control-Allow-Origin: https://portfolio.sjeremy.dev/*');
header("Content-Type: application/json; charset=utf-8");

require_once __DIR__ . '/../vendor/autoload.php';

Debugger::$logDirectory = __DIR__ . '/../log';
Debugger::$strictMode = true;
Debugger::enable(Debugger::Production);

require_once __DIR__ . '/../translator.php';

Validator::$messages = [
	Form::Filled => 'required',
	Form::Email => 'email'
];

$locales = [
	'en',
	'es'
];

$locale = isset($_SERVER['HTTP_X_PORTFOLIO_LANG']) && in_array($_SERVER['HTTP_X_PORTFOLIO_LANG'], $locales, true) ? $_SERVER['HTTP_X_PORTFOLIO_LANG'] : $locales[0];
$translator = new FormTranslator(parse_ini_file(__DIR__ . '/../locale/' . $locale . '.ini'));

$form = new Form;
$form->allowCrossOrigin();
$form->setTranslator($translator);

$form->addText('name')
	->addFilter([Strings::class, 'normalize'])
	->setRequired()
	->addFilter([Strings::class, 'capitalize']);

$form->addText('surname')
	->addFilter([Strings::class, 'normalize'])
	->setRequired()
	->addFilter([Strings::class, 'capitalize']);

$form->addEmail('email')
	->addFilter([Strings::class, 'normalize'])
	->setRequired();

$form->addTextArea('message')
	->addFilter([Strings::class, 'normalize'])
	->setRequired()
	->addFilter([Strings::class, 'firstUpper']);

$form->addCheckbox('legal')
	->setRequired();

$form->onError[] = function(Form $form) use ($translator): void {
	$form->addError('formError');
	
	$errors = [];

	foreach ($form->getControls() as $input => $data) {
		$errors[$input] = $data->getErrors();
	}

	echo json_encode(['status' => -1, 'formErrors' => $form->getOwnErrors(), 'inputErrors' => [...$errors]]);

	exit;
};

$form->onSuccess[] = function(Form $form) use ($translator): void {
	$mailSettings = parse_ini_file(__DIR__ . '/../settings/mail.ini');
	$smtpSettings = parse_ini_file(__DIR__ . '/../settings/smtp.local.ini');
	$nameOwner = $mailSettings['name'];
	$nameUser = "{$form['name']->getValue()} {$form['surname']->getValue()}";
	
	try {
		$mailOwner = new Nette\Mail\Message;
		$mailOwner->setFrom($smtpSettings['username'], $nameUser)
			->addTo($smtpSettings['username'], $nameOwner)
			->addReplyTo($form['email']->getValue(), $nameUser)
			->setSubject($translator->translate('subjectOwner', $mailSettings['siteName'], $nameUser))
			->setHtmlBody($translator->translate(
				'bodyOwner',
				$form['name']->getValue(),
				$form['surname']->getValue(),
				$form['email']->getValue(),
				$form['message']->getValue()
			))
			->clearHeader('X-Mailer');

		$mailUser = new Nette\Mail\Message;
		$mailUser->setFrom($smtpSettings['username'], $nameOwner)
			->addTo($form['email']->getValue(), $nameUser)
			->addReplyTo($smtpSettings['username'], $nameOwner)
			->setSubject($translator->translate('subjectUser', $mailSettings['siteName']))
			->setHtmlBody($translator->translate(
				'bodyUser',
				$form['name']->getValue(),
				$form['surname']->getValue(),
				$form['email']->getValue(),
				$form['message']->getValue()
			))
			->clearHeader('X-Mailer');

		$mailer = new Nette\Mail\SmtpMailer(
			host: (string) $smtpSettings['host'],
			username: (string) $smtpSettings['username'],
			password: (string) $smtpSettings['password'],
			encryption: (string) $smtpSettings['encryption'],
			port: (int) $smtpSettings['port']
		);

		$mailer->send($mailOwner);
		$mailer->send($mailUser);
	} catch (Exception $e) {
		Debugger::log($e);

		$form->addError('formError');

		echo json_encode(['status' => -1, 'formErrors' => $form->getOwnErrors(), 'inputErrors' => []]);

		exit;
	}

	echo json_encode(['status' => 1, 'message' => $translator->translate('formSuccess')]);

	exit;
};

$form->fireEvents();

header('location: /');