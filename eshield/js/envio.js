    $(document).ready(function()
    {
        $('#enviar').click(function()
        {
            var tmp = {
					'ip': $('#ip').val(),									//IP DO CLIENTE
					'cliente': $('#cliente').val(),							//CODIGO DO CLIENTE JUNTO À ESHIELD
					'javascript': $('#javascript').val(),					//TRUE OU FALSE SE UTILIZA OUTROS SCRIPT PHP PARA ANALISE
					'action_type': $('#action_type').val(),					//TIPO DE CONTA PADRÃO "PURCHASE"
					'transaction_id': $('#transaction_id').val(),			//ID UNICO DA TRANSAÇÃO
					'affiliate_id': $('#affiliate_id').val(),				//IDENTIFICAÇÃO DE AFILIADO NO CLIENTE
					'affiliate_name': $('#affiliate_name').val(),			//NOME DE AFILIADO NO CLIENTE
					'user_order_memo': $('#user_order_memo').val(),			//DESCRIÇÃO DA TRANSAÇÃO
					'run_email_api': $('#run_email_api').val(),				//DESEJA EXECUTAR API DE EMAIL ? PADRÃO TRUE
					'email': $('#email').val(),								//EMAIL DO CLIENTE
					'email_domain': $('#email_domain').val(),				//DOMINIO DO EMAIL
					'password_hash': $('#password_hash').val(),				//SENHA DE EMAIL CRIPTOGRAFADO MD5
					'user_fullname': $('#user_fullname').val(),				//NOME COMPLETO DO CLIENTE
					'user_name': $('#user_name').val(),						//NOME DE USUARIO
					'user_id': $('#user_id').val(),							//CODIGO DO USUARIO
					'user_cpf': $('#user_cpf').val(),						//CPF DO USUARIO
					'user_created': $('#user_created').val(),				//Data do usuário primeiro registrado em seu site no formato de hora do UNIX e fuso horário UTC.
					'user_country': $('#user_country').val(),				//PAIS DO USUARIO
					'user_city': $('#user_city').val(),						//CIDADE DO USUARIO
					'user_region': $('#user_region').val(),					//REGIÃO DO USUARIO
					'user_zip': $('#user_zip').val(),						//CEP
					'user_street': $('#user_street').val(),					//PRIMEIRO ENDEREÇO
					'user_street2': $('#user_street2').val(),				//SEGUNDO ENDEREÇO
					'session_id': $('#session_id').val(),					//RASTREADOR EXCLUSIVO DA SESSÃO
					'device_id': $('#device_id').val(),						//ID DO DISPOSITIVO
					'payment_mode': $('#payment_mode').val(),				//METODO DE PAGAMENTO
					'card_fullname': $('#card_fullname').val(),				//NOME IMPRESSO NO CARTÃO CRIPTOGRAFADO MD5
					'card_bin': $('#card_bin').val(),						//6 PRIMEIRO DIGITOS DO CARTÃO
					'card_hash': $('#card_hash').val(),						//REPRESENTACAO SEGURA DOS DADOS ENVIADO DO SEU SERVIDOR
					'card_last': $('#card_last').val(),						//4 ULTIMO DIGITOS DO CARTÃO
					'avs_result': $('#avs_result').val(),
					'cvv_result': $('#cvv_result').val(),
					'phone_number': $('#phone_number').val(),				//COD DO PAIS + TELEFONE
					'transaction_type': $('#transaction_type').val(),		//TIPO DE TRANSAÇÃO PADRÃO "PURCHASE"
					'transaction_amount': $('#transaction_amount').val(),	//TOTAL DA TRANSAÇÃO
					'transaction_currency': $('#transaction_currency').val(),//MOEDA A SER PAGO O VALOR DO AMOUNT "BRL"
					'item_id': $('#item_id').val(),							//ITENS
					'item_quantity': $('#item_quantity').val(),
					'item_name': $('#item_name').val(),
					'item_price': $('#item_price').val(),
					'item_store': $('#item_store').val(),
					'item_store_country': $('#item_store_country').val(),
					'item_categories': $('#item_categories').val(),
					'item_url': $('#item_url').val(),
					'item_user_label': $('#item_user_label').val(),
					'item_id2': $('#item_id2').val(),						//ITENS
					'item_quantity2': $('#item_quantity2').val(),
					'item_name2': $('#item_name2').val(),
					'item_price2': $('#item_price2').val(),
					'item_store2': $('#item_store2').val(),
					'item_store_country2': $('#item_store_country2').val(),
					'item_categories2': $('#item_categories2').val(),
					'item_url2': $('#item_url2').val(),
					'item_user_label2': $('#item_user_label2').val(),
					'item_id3': $('#item_id3').val(),						//ITENS
					'item_quantity3': $('#item_quantity3').val(),
					'item_name3': $('#item_name3').val(),
					'item_price3': $('#item_price3').val(),
					'item_store3': $('#item_store3').val(),
					'item_store_country3': $('#item_store_country3').val(),
					'item_categories3': $('#item_categories3').val(),
					'item_url3': $('#item_url3').val(),
					'item_user_label3': $('#item_user_label3').val(),
					'shipping_country': $('#shipping_country').val(),		//PAIS DE ENTREGA
					'shipping_city': $('#shipping_city').val(),				//CIDADE DE ENTREGA
					'shipping_region': $('#shipping_region').val(),			//REGIÃO
					'shipping_zip': $('#shipping_zip').val(),				//CEP
					'shipping_street': $('#shipping_street').val(),			//ENDERECO1
					'shipping_street2': $('#shipping_street2').val(),		//ENDERECO2
					'shipping_phone': $('#shipping_phone').val(),			//TELEFONE
					'shipping_fullname': $('#shipping_fullname').val(),		//NOME COMPLETO
					'shipping_method': $('#shipping_method').val(),			//METODO DE ENTREGA
					'billing_country': $('#billing_country').val(),			//PAIS DE COBRANCA
					'billing_city': $('#billing_city').val(),				//CIDADE
					'billing_region': $('#billing_region').val(),			//REGIAO
					'billing_zip': $('#billing_zip').val(),					//CEP
					'billing_street': $('#billing_street').val(),			//ENDERECO1
					'billing_street2': $('#billing_street2').val(),			//ENDERECO2
					'billing_phone': $('#billing_phone').val(),				//TELEFONE
					'discount_code': $('#discount_code').val(),				//CUPOM DE DESCONTO
					'gift': $('#gift').val(),								//É UM PRESENTE PARA O DESTINATARIO ? TRUE OU FALSE
					'gift_message': $('#gift_message').val(),				//MENSAGEM PARA O ANIVERSARIANTE
					'merchant_id': $('#merchant_id').val(),					//NOME DO CLIENTE DA ESHIELD
					'merchant_created_at': $('#merchant_created_at').val(), //DATA DE CADASTRO
					'merchant_country': $('#merchant_country').val(),		//PAIS
					'details_url': $('#details_url').val(),					//URL DA PAGINA
					'user_label': $('#user_label').val(),					//TIPO DE NEGOCIO DO CLIENTE ESHIELD
					'is_intangible_item': $('#is_intangible_item').val(),
					'is_pay_on_delivery': $('#is_pay_on_delivery').val(),
					'departure_airport': $('#departure_airport').val(),
					'days_to_board': $('#days_to_board').val(),
					'is_pay_on_delivery2': $('#is_pay_on_delivery2').val(),
					'arrival_airport': $('#arrival_airport').val(),
					'segmento': $('#segmento').val()						//CAMPOS CUSTOMIZADOS
					};

            $.ajax({
              type: 'POST',
              url: 'http://45.32.171.53/e_teste/connect.php',
              data: JSON.stringify(tmp),

              success: function(data) {
                console.log(data);
              }
            });

        });

    });
