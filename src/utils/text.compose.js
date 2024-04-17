export function RenderText(string) {
    return (
        string.split('').map((el, key) => (
            <span className="letter" key={key}>{el}</span>
        ))
    )
}