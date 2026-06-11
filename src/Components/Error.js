export default function Error({ message }) {
    return <p style={{ gridColumn: '2 / 3', justifySelf: 'center' }}>
        <span>🚨</span> {message}
    </p>;
}
