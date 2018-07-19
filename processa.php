<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
		$nome = $_POST['nome'];
		$email = $_POST['email'];
		$telefone = $_POST['telefone'];
		$assunto = $_POST['assunto'];
		$mensagem = $_POST['mensagem'];
		
        require 'vendor/autoload.php';

        $from = new SendGrid\Email(null, "hamilton_mb@hotmail");
        $subject = "Mensagem de contato";
        $to = new SendGrid\Email(null, "hamiltonmb.silva@gmail.com");
        $content = new SendGrid\Content("text/html", "Olá Hamilton, <br><br>Nova mensagem de contato<br><br>
		Nome: $nome<br>Email: $email <br>Telefone: $telefone <br>Assunto: $assunto <br>Mensagem: $mensagem");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        //Necessário inserir a chave
        $apiKey = 'senha do Sengrid';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        echo "Mensagem enviada com sucesso";
		
        ?>
    </body>
</html>
