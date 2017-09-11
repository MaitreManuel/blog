var React = require("react");
var FroalaEditor = require("react-froala-wysiwyg");

class EditorComponent extends React.Component {
    constructor () {
        super();

        this.handleModelChange = this.handleModelChange.bind(this);

        this.state = {
            options: {
                placeholder: "Taper le texte de votre article...",
                events : {
                    'froalaEditor.focus' : function(e, editor) {
                        console.log(editor.selection.get());
                    }
                }
            }
        };
    }

    handleModelChange(model) {
        this.setState({ model: model });
    }

    render () {
        return (
            <FroalaEditor tag='textarea' config={this.state.config} model={this.state.model} onModelChange={this.handleModelChange} />
        );
    }
}

module.exports =  EditorComponent;
