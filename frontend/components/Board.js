export default function Board({ board, onClick }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px' }}>
            {board.map((value, index) => (
                <button
                    key={index}
                    style={{ width: '100px', height: '100px', fontSize: '24px' }}
                    onClick={() => onClick(index)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
}
