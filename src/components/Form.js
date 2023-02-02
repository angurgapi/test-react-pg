import './form.css'

function Form() {
  return (
    <div className="auth-form">
      <div class="auth-form__form">
        <div className='input-wrapper'>
            <span className='input-wrapper__label'>email</span>
        <input className='input-wrapper__input'/>
        </div>
        <div className='input-wrapper'>
            <span className='input-wrapper__label'>password</span>
        <input className='input-wrapper__input'/>
        </div>

        <button class="auth-form__submit" onClick={submit}>log in</button>
       
      </div>
    </div>
  );
}

function submit() {
    console.log('kek')
}

export default Form;
