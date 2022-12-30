import FormSection from "./FormSection";
import "./MushroomForm.scss";
function MushroomForm({ mushroom, onChange, onSubmit, submitLabel }) {

    if (mushroom) {
        return (
            <div className="form-container">

            <form onSubmit={onSubmit} className="update-form">
                <FormSection type="text" id="name1" label="Svenskt namn" value={mushroom.name1} placeholder="Tegelkremla" onChange={onChange} />
                <FormSection type="text" id="name2" label="Vetenskapligt namn" value={mushroom.name2} placeholder="Russula claroflava" onChange={onChange} />
                <FormSection type="radio" id="family" label="Familj" value={mushroom.family} placeholder="Kremla" onChange={onChange} />
                <FormSection type="textarea" id="description" label="Beskrivning" value={mushroom.description} placeholder="Rödaktig hatt och vit märgliknande fot" onChange={onChange} />
                <FormSection type="text" id="image" label="Bild adress" value={mushroom.image} placeholder="https://images.unsplash.com/photo-1662068821345-469fd19e2d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFjdGFyaXVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" onChange={onChange} />
                <FormSection type="submit" id="submit" label={submitLabel} />

            </form>
            </div>
        )
    }
}
export default MushroomForm;