import react from 'react';

const Btn = (props) => {
    const {
        btnText,
        onClickFn
    } = props;
    return (
        <button onClick={onClickFn}>{btnText}</button>
    );
}

export default Btn;