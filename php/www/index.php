<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Nette\Http\Response;

$response = new Response;
$response->setCode(Response::S403_Forbidden);

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">

	<title>Error 403 - You don't have access to this website</title>

	<style>
		* {
			margin: 0;
			padding: 0;
		}

		body {
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

			display: grid;
			justify-items: center;
			align-items: center;

			width: 100%;
			height: 100vh;
			height: 100dvh;
		}
	</style>
</head>
<body>
	<h1>Error 403 - You don't have access to this website</h1>
</body>
</html>