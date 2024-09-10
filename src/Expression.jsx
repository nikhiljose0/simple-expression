import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateExpression,evaluateExpression,resetExpression } from './Redux/counterSlice';

function Expression() {
    const dispatch = useDispatch();
    const { expression, result } = useSelector((store) => store.expressionReducer);

    const handleInputChange = (e) => {
        dispatch(updateExpression(e.target.value));
    };

    const handleEvaluate = () => {
        dispatch(evaluateExpression());
    };

    const handleReset = () => {
        dispatch(resetExpression());
    };


    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center border border-secondary w-50 mt-5" style={{height:'50vh',left:'400px',position:'relative'}}>
                <h1 className="text-primary mb-4 text-center text-white">Expression Evaluater</h1>
                <input
                    type="text"
                    value={expression}
                    onChange={handleInputChange}
                    placeholder="Enter Value"
                    className="form-control mb-3 w-50"
                />
                <div className="d-flex mb-3">
                    <button className="btn btn-info me-3" onClick={handleEvaluate}>
                        Calculate
                    </button>
                    <button className="btn btn-danger" onClick={handleReset}>
                        Reset
                    </button>
                </div>
                <h3 className="tx1 text-white">Result: {result !== null ? result : "0"}</h3>
            </div>
        </>
    )
}

export default Expression