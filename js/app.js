var dolar, euro, uf, utm;

	$.ajax ({
		url: 'https://mindicador.cl/api/',
		dataType: 'json',
		method: 'GET'
	}).done(function (data) { 
		dolar = data.dolar.valor;
		euro = data.euro.valor;
		uf = data.uf.valor;
		utm = data.utm.valor;
		$('#usd_current').text(dolar);
		$('#euro_current').text(euro);
		$('#uf_current').text(uf);
		$('#utm_current').text(utm);
		console.log(data);
	})

	$('#clp-submit').on('click', function(e){

		dolar = parseInt(dolar);
		euro = parseInt(euro);
		uf = parseInt(uf);
		utm = parseInt(utm);

		e.preventDefault();
		clpConsulta = $('#clp-value').val();
		clpConsulta = parseInt(clpConsulta);
		var resultadoClpUsd = clpConsulta / dolar;
		var resultadoClpEuro = clpConsulta / euro;
		$('#clp-usd').text(resultadoClpUsd.toFixed(2));
		$('#clp-euro').text(resultadoClpEuro.toFixed(2));
		// RESET NUMBER SUBMIT
		$('#clp-value').val('');
		console.log(clpConsulta);
		console.log(dolar);
	})

	$('#usd-submit').on('click', function(e){

		e.preventDefault();
		usdConsulta = $('#usd-value').val();
		usdConsulta = parseInt(usdConsulta);
		var resultadoUsdClp = usdConsulta * dolar;
		$('#usd-clp').text(resultadoUsdClp.toFixed(2));
		// RESET NUMBER SUBMIT
		$('#usd-value').val('');
	})