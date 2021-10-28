import classNames from "classnames";
import PropTypes from "prop-types";
import * as icons from "../../icons";

interface IProps {
  name: keyof typeof icons;
  size?: number | [number, number];
  className?: string;
}

const Icon = ({ size = 20, name, className = "" }: IProps) => {
  const [width, height] = size instanceof Array ? size : [size, size];
  const [icon, viewBox] = icons[name];

  return (
    <svg
      className={classNames("icon", className)}
      width={width}
      height={height}
      dangerouslySetInnerHTML={{ __html: icon }}
      viewBox={viewBox}
    />
  );
};

Icon.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  ]),
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
