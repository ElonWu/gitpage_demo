import * as React from "react";
import { Character } from "models/character";
import "./CharacterCard.scss";
import IconAlive from "assets/icon/icon_alive.png";
import IconDead from "assets/icon/icon_dead.png";
import IconUnknown from "assets/icon/icon_unknown.png";
interface Props {
  info: Character;
}

export class CharacterCard extends React.Component<Props> {
  renderStatus(status: string) {
    if (["Alive", "Dead", "unknown"].indexOf(status) === -1) {
      return null;
    }
    const config = {
      Alive: {
        txt: "Alive",
        icon: IconAlive
      },
      Dead: {
        txt: "Dead",
        icon: IconDead
      },
      unknown: {
        txt: "Unknown",
        icon: IconUnknown
      }
    };
    const { txt, icon } = config[status];
    return (
      <div
        className={`living-status ${status.toLowerCase()}`}
        style={{ backgroundImage: `url(${icon})` }}
      >
        {txt}
      </div>
    );
  }

  render() {
    const {
      name,
      status = "",
      species,
      gender,
      origin,
      location,
      image
    } = this.props.info;
    return (
      <div className="character-card">
        <div className="thumbnail" style={{ backgroundImage: `url(${image})` }}>
          <h3>{name}</h3>
        </div>
        <ul className="info">
          <li>
            <h4>Gender</h4>
            <p>{gender}</p>
          </li>
          <li>
            <h4>Location</h4>
            <p>{location.name}</p>
          </li>
          <li>
            <h4>Species</h4>
            <p>{species}</p>
          </li>
        </ul>

        {this.renderStatus(status)}
      </div>
    );
  }
}
