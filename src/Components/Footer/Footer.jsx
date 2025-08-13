import "./Footer.css"

export default function Footer() {
     const Mailto = ({email, children}) => {
        return <a href={`mailto:${email}`}>{children}</a>
    }

    const Callto = ({ phone, children }) => {
        return <a href={`tel:${phone}`}>{children}</a>;
    }

    return (
        <footer class="footer">
        <div class="container container__footer">
            <div class="footer-info">
            <a href="#" class="logo">dk</a>
                <div class="contact__info">
                   <Mailto  email={"koriba93@gmail.com"}><strong>Email: </strong>koriba93@gmail.com</Mailto>
                    <Callto phone="+79165287796"><strong>tel: </strong>+7 916 529 77 96</Callto>
                    <a href="https://github.com/Bulbash93" target="_blank"> <strong>Git: </strong>Личный кабинет</a>
                </div>
            </div>        
        </div>
    </footer>
    )
}