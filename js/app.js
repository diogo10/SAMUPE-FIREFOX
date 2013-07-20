$(document).ready(function(){
		
	$('#btlogin').click(function(){

		$.ajax({
			type: "POST",
			url: 'js/script.php',
			data: { name: "John", location: "Boston" },
			success: function(response){
				
			}    
		});

	});
	
	$('#btperfil').click(function(){
		alert('recebe-valor-perfil');
	});
				
	$("#formcadastro").validate({
		submitHandler: function(){
			$.ajax({
				type: "POST",    
				url: 'scripts/script.php',
				data: 	'dados='+$("#nome").val()+','+$("#idade").val()+','+$("#telefone").val()+','+$("#tipo_sanguineo").val()+','+$("#alergico").val(),
				dataType: 'json',					
				success: function(resposta){
					alert('sucess');
				}    
			});
			return false;
		},
		onkeyup: false,
		onfocusout: false,
		errorPlacement : function(erro, elemento) {
			alert('error');
		}
	});
					
});
		

	
