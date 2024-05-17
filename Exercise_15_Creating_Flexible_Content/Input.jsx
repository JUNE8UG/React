// input.jsx

export default function Input({richText,...props}) {
    // return a <textarea> if a richText prop is true
    // return an <input> otherwise
    // forward / set the received props on the returned elements
     if(richText) {
        <textarea {...props}></textarea>
    }
    return (
        <section>
            <input{...props}></input>
        </section>
    );
  }