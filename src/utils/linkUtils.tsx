/**
 * get NavLink css style
 *
 * ////////////////////////////////////////////
 *
 * display: block
 *
 * margin: 1rem 0
 *
 * color: red : '' (the link is active or not)
 *
 * ////////////////////////////////////////////
 *
 * @param {boolean} { isActive }
 * @return {React.CSSProperties} css-style
 */
export const getLinkStyle = ({isActive}: {isActive: boolean}) => {
  const style: React.CSSProperties = {
    display: 'block',
    margin: '1rem 0',
    color: isActive ? 'red' : ''
  };
  return style;
};
