import "./FormSection.scss";
function FormSection(props) {
    switch (props.type) {
        case "textarea":
            return (
                <div className="form-section">
                    <label htmlFor={props.id} > {props.label}</label>
                    <textarea id={props.id} value={props.value} onChange={props.onChange} placeholder={props.placeholder} requirered="true"/>
                </div>
            );
        case "radio":
            return (
                <div className="form-section">
                    <label htmlFor={props.id} > {props.label}</label>
                    <select id={props.id} value={props.value} onChange={props.onChange} placeholder={props.placeholder} requirered="true">
                        <option value="Kremlor">Kremlor</option>
                        <option value="Riskor">Riskor</option>
                        <option value="Kantareller">Kantareller</option>
                        <option value="Soppar">Soppar</option>
                    </select>
                </div>);
        case "text":
            return (
                <div className="form-section">
                    <label htmlFor={props.id} > {props.label}</label>
                    <input type="text" id={props.id} value={props.value} placeholder={props.placeholder} onChange={props.onChange} requirered ="true"/>
                </div>
            );
        case "submit":
            return (
                <div className="form-section" id="submit-section">
                    <label htmlFor={props.id} > {props.label}</label>
                    <input type="submit" value={props.label} />
                </div>
            );
        case "default":
            return (
                <h1>Ooops!</h1>
            );


    }




}
export default FormSection;
