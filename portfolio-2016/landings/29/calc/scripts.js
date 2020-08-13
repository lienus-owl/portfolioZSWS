// JavaScript Document
$(document).ready(function() {
	//������� ���������� � ����� �����
	$("#calculate").find("tr:odd").css({"background":"#fbdd59", "opacity":"0.8"});
	
	//�����������
	$("#tableSelect").change(function() {
		var totalSum = 0;
		
		$("input[id^='pos'], select[id^='pos']").each(function() {
			var idElement = "#"+$(this).attr("id"), //�������� id ��������
				priceField = parseInt($(idElement+"_price").text()), //��������� �������
				countField = parseInt($(this).val()); //�������� ��������
			
			$(idElement+"_count").text(priceField * countField); //������� ����� �� �������
			totalSum += priceField * countField;
		});
		$("#count_price span").text(totalSum);
	});
});