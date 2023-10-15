function HeaderOnly({ children }) {
    return (
        <div>
            <h1>Upload đ</h1>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default HeaderOnly;
