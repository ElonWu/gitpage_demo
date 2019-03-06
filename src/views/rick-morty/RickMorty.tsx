import * as React from "react";
import CHARACRET_API from "api/character";
import { Character } from "models/character";
import { random } from "lodash";
import { CharacterCard } from "components/CharacterCard/CharacterCard";
import "./RickMorty.scss";
import { Form, message, Input, Button } from "antd";
const Search = Input.Search;
interface Props {}

interface State {
  characterId: number | undefined;
  character: Character | undefined;
}
export class RickMorty extends React.Component<Props, State> {
  timer;
  constructor(props: Props) {
    super(props);

    this.timer = null;
    this.state = {
      characterId: random(100),
      character: undefined
    };

    this.getSingleCharactor = this.getSingleCharactor.bind(this);
    this.findCharacter = this.findCharacter.bind(this);
  }

  componentDidMount() {
    this.findCharacter();
  }

  async getSingleCharactor(id: number) {
    try {
      const result: any = await CHARACRET_API.getOne(id);
      this.setState({ character: result });
    } catch (err) {
      console.log("page catch", err);
    }
  }

  updateCharacter(id: number | undefined) {
    const TOTAL = 384;
    if (id && id > TOTAL) {
      message.error(`${TOTAL} characrers total`);
    }
    this.setState({ characterId: id });
  }

  findCharacter() {
    const { characterId } = this.state;
    if (characterId) {
      this.getSingleCharactor(characterId);
    }
  }

  render() {
    const { character } = this.state;
    return (
      <div className="rick-morty">
        <Form
          style={{ width: "70%", marginBottom: "1.2rem", textAlign: "center" }}
        >
          <Search
            placeholder="search id"
            enterButton="Search"
            onChange={e => this.updateCharacter(parseInt(e.target.value))}
            onSearch={this.findCharacter}
          />
        </Form>
        {character && <CharacterCard info={character} />}

        <Button
          type="primary"
          style={{ width: "70%", marginTop: "1.2rem" }}
          onClick={() => {
            this.setState(
              {
                characterId: random(384)
              },
              this.findCharacter
            );
          }}
        >
          Random
        </Button>
      </div>
    );
  }
}
