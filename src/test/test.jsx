import { useRef } from "react";
import { InputBox, Buttons } from "../components";

function Test() {
    const emailRef = useRef('')
    const nameRef = useRef('')

    function submit(e) {
        e.preventDefault()
        console.log(nameRef.current?.value);
        console.log(emailRef.current?.value);
    }

    return (
        <div className='w-full min-h-screen p-10 justify-center items-center flex flex-col gap-6 border rounded'>
            <form className='w-1/2'>
                <InputBox label={'Email'} placeholder={'Enter Email Address'} type={'email'} inputRef={emailRef} error={'Invalid Email'} required />
                <InputBox label={'Name'} placeholder={'Enter Full Name'} type={'text'} inputRef={nameRef} />
                <Buttons value={'Submit'} onClick={submit} />
            </form>
        </div>
    );
}

export default Test;