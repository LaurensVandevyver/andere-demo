{

  let $form = document.forms[0];


  const onFormSubmit = event => {
		console.log('onFormSubmit');
		event.preventDefault();
		if(!$form.checkValidity()){
			checkNaam(document.getElementById('name'));
			checkEmail(document.getElementById('email'));
			checkCafe(document.getElementById('cafe'));
      checkIdeaal(document.getElementById('ideaal'));
		}else{
			let naam = document.getElementById('name').value;
			let email = document.getElementById('email').value;
			let cafe = document.getElementById('cafe').value;
      let ideaal = document.getElementById('ideaal').value;
		}
	}

  const checkNaam = $veld =>{
  $veld.parentNode.querySelector('.error').innerHTML = valueMissing($veld);
}

const checkEmail = $veld => {
  if(valueMissing($veld)){
    $veld.parentNode.querySelector('.error').innerHTML = valueMissing($veld);
  }else if(typeMismatch($veld)){
    $veld.parentNode.querySelector('.error').innerHTML = typeMismatch($veld);
  }
}

  const valueMissing = $veld => {
  if($veld.validity.valueMissing){
    return 'Hey, je bent iets vergeten!';
  }

  const typeMismatch = $veld => {
  if($veld.validity.typeMismatch){
    return 'Hmmm precies een tikfoutje.';
  }
  return '';
  console.log('typeMismatch');
}

  return '';
}

const onNameChange = e => {
  let $veld = e.currentTarget;
  if(e.type==='blur'){
    checkNaam($veld);
  }else if(e.type==='input'){
    if($veld.validity.valid){
      $veld.parentNode.querySelector('.error').innerHTML='';
    }
  }
}

const onEmailChange = e => {
  let $veld = e.currentTarget;
  if(e.type==='blur'){
    checkEmail($veld);
  }else if(e.type==='input'){
    if($veld.validity.valid){
      $veld.parentNode.querySelector('.error').innerHTML='';
    }
  }
}

const onCafeChange = e => {
  let $veld = e.currentTarget;
  if(e.type==='blur'){
    checkEmail($veld);
  }else if(e.type==='input'){
    if($veld.validity.valid){
      $veld.parentNode.querySelector('.error').innerHTML='';
    }
  }
}

const onIdeaalChange = e => {
  let $veld = e.currentTarget;
  if(e.type==='blur'){
    checkEmail($veld);
  }else if(e.type==='input'){
    if($veld.validity.valid){
      $veld.parentNode.querySelector('.error').innerHTML='';
    }
  }
}

  const init = () => {
    console.log('hello world');
    $form.noValidate = true;
    $form.addEventListener('submit', onFormSubmit);

    document.getElementsByName('name')[0].addEventListener('input', onNameChange);
    document.getElementsByName('email')[0].addEventListener('input', onEmailChange);
    document.getElementsByName('cafe')[0].addEventListener('input', onCafeChange);
    document.getElementsByName('ideaal')[0].addEventListener('input', onIdeaalChange);

    document.getElementsByName('name')[0].addEventListener('blur', onNameChange);
    document.getElementsByName('email')[0].addEventListener('blur', onEmailChange);
    document.getElementsByName('cafe')[0].addEventListener('blur', onCafeChange);
    document.getElementsByName('ideaal')[0].addEventListener('blur', onIdeaalChange);
  }

  init();
}
