		//
		//  ����������� �������, ����� ����������� �������� ���������� �������� �����������
		// 
		Event.observe(window, 'load', loadAccordions, false);
	
		//
		//	��������� ����������
		//
		function loadAccordions() {
			
			
			var bottomAccordion = new accordion('vertical_container');
			
			var nestedVerticalAccordion = new accordion('vertical_nested_container', {
			  classNames : {
					toggle : 'vertical_accordion_toggle',
					toggleActive : 'vertical_accordion_toggle_active',
					content : 'vertical_accordion_content'
				}
			});
			
			
			// ���� �� ������, ����� ������ ������ ���������� ���������, �� ������� ������ ����
		
			
		}
	