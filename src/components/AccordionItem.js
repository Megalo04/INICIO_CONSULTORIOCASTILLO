import React from 'react';

const AccordionItem = ({ active, toggleAccordion, question, answer }) => (
    <div
        className="card"
        onClick={toggleAccordion}
        style={{ cursor: 'pointer' }}
    >
        <div className="card-header" style={{ backgroundColor: active ? '#97EAFF' : '#FFFFFF' }}>
            <button
                className="btn btn-link text-dark"
                type="button"
                style={{ textDecoration: 'none', display: 'block', width: '100%', textAlign: 'left', fontWeight: 'bold', position: 'relative' }}
                aria-expanded={active ? "true" : "false"}
            >
                {question}
                <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', width: 0, height: 0, borderTop: '5px solid #6c757d', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', transition: 'transform 0.3s', transform: active ? 'rotate(180deg)' : 'rotate(0deg)' }}></span>
            </button>
        </div>
        {active && (
            <div className="card-body">
                {answer}
            </div>
        )}
    </div>
);

export default AccordionItem;