<?php
//���� ����� ����������
if(isset($_POST['submit'])) {

	//�������� ���� ���
	if(trim($_POST['name']) == '') {
		$hasError = true;
	} else {
		$name = trim($_POST['name']);
	}	
	//�������� ���� �������
	if(trim($_POST['number']) == '') {
		$hasError = true;
	} else {
		$number = trim($_POST['number']);
	}
	
	}

	//���� ������ ���, ��������� email
	if(!isset($hasError)) {
		$emailTo = 'sklanna@yandex.ru'; //���� ������� ��� email
		$body = "
		���: $name \n\n
			
		�������: $number \n\n		
		";
		$headers = 'From: site "Mini-pechi"' . "\r\n" . 'Reply-To: ' . $email;
		
		mail($emailTo, $subject, $body, $headers);
		$emailSent = true;
	}

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<? include("blocks/head.php");?>
<title>����-����</title>
</head>
<body>
	<? include("blocks/header.php");?>
	<div id="main">
		<div id="content">
		<?php if(isset($hasError)) { //���� ������� ������ ?><br>
			<p class="error" style="color: #cc0000;font-size: 21px;">���������, ����������, ������������ ���������� ���� �����.</p>
			<?php } ?>
			<?php if(isset($emailSent) && $emailSent == true) { //���� ������ ���������� ?><br>
			<div id="win"><p style="color: #e94500;font-size: 19px;"><strong>������ ������� �������!</strong></p></div>
			<p  style="font-size: 17px;">�������  <strong><?php echo $name;?></strong> �� ������������� ���������� �����! <br>�� �������� � ���� � ���������� �����.</p>
			<?php } ?>
		<? include("blocks/content.php");?>
	</div>
	</div>
	
</body>
</html>