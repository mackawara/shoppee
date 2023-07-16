import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

export default function SocialMedia(props: any) {
  return (
    <div className="social-media-group">
      <a href={props.link}>
        <FontAwesomeIcon icon={props.iconName} />
      </a>
    </div>
  );
}
