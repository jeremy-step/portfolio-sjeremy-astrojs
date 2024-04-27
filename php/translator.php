<?php

declare(strict_types=1);

use Nette\Utils\Strings;

class FormTranslator implements Nette\Localization\Translator {
	public function __construct(private array $translations) {}

	public function translate(string|\Stringable $message, mixed ...$parameters): string|\Stringable {
		return $this->formatMessage($this->translations[$message] ?? $message, ...$parameters);
	}

	private function formatMessage(string $string, ...$parameters): string {
		$string = Strings::replace($string, '/%(\d+\$[ds]|[ds])/', function (array $matches) use ($parameters): string {
			static $i = -1;

			$i = (int) $matches[1] ? (int) $matches[1] - 1 : $i + 1;

			return (string) (isset($parameters[$i]) ? $parameters[$i] : $matches[0]);
		});

		return $string;
	}
}