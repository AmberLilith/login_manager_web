    import { useEffect, useState } from 'react';
    import './loginPagination.css';

    const LoginPagination = ({ updateActivePage, activePage, setActivePage, updateUrl, totalPages, theme }) => {
        let pagesNumbers = [];
        const [activeItem, setActiveItem] = useState(0)
        for (let number = 0; number < totalPages; number++) {
            pagesNumbers.push(number);
        }
        //TODO ao excluir o ultimo registro da página atualmente selecionada, selecionar a próxima pagina se a atual não for a última.
        //Se for a última, selecionar a anterior. 
        function updateActiveItem (id){
            for (let number = 0; number < pagesNumbers.length; number++) {
                document.getElementById('page_index_' + number).classList.remove(theme.loginPagination.activeItem);
            }       
                document.getElementById(id).classList.add(theme.loginPagination.activeItem);     
                setActivePage(id.split("_")[2]);
        }

        // TODO o useEffet abaixo que é para manter o item atualmente ativado mesmo mudando o theme, está dando certo, mas só quando 
        // o componente já está renderizado. Se for renderizar pela primeira vez, da o erro Cannot read properties
        // of null (reading 'classList')

        useEffect(() => {
            // alert('page_index_' + activePage)
            // updateActiveItem('page_index_' + activePage)
            for (let number = 0; number < pagesNumbers.length; number++) {
                document.getElementById('page_index_' + number).classList.remove(theme.loginPagination.activeItem);
            }       
                document.getElementById('page_index_0').classList.add(theme.loginPagination.activeItem);     
                setActivePage(0);
        },[]);
        

        
        return (
            <nav>
                <ul className="pagination">
                    {pagesNumbers.map(pageNumber => (
                        <li key={"page_index_" + pageNumber} id={"page_index_" + pageNumber}  className={pageNumber == 0 ? "active " + theme.loginPagination.pageItem :  theme.loginPagination.pageItem} ><a className={theme.loginPagination.pageLink} onClick={() => [updateActivePage(pageNumber), updateUrl(pageNumber), updateActiveItem("page_index_" + pageNumber)]} href="#">{pageNumber} </a></li>
                    ))}                
                </ul>
            </nav>
        )
    }

    export default LoginPagination;



