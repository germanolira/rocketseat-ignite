export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.description}</p>

            <a href={props.repository.html_url}>
                Acessa repositório
            </a>
        </li>
    )
}