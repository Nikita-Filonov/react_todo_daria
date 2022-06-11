import React, {memo} from "react";

const MemoExample = ({number}) => {

    console.log('redner memo');

    return (
        <p>Hello From Memo, {number}</p>
    )
};

export default memo(MemoExample);