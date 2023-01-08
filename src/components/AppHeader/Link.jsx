import PropTypes from 'prop-types';


function Link({ lclass, href, icon, paragraphClass, text }) {
  return (
    <a className={lclass} href={href}>
      {icon} <p className={paragraphClass}>{text}</p>
    </a>
  );
}

Link.propTypes = {
  // sort: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  // style: PropTypes.object.isRequired,
 href: PropTypes.string.isRequired,
 lclass: PropTypes.string.isRequired,
 icon: PropTypes.node.isRequired,
 paragraphClass: PropTypes.string.isRequired,
 text: PropTypes.string.isRequired

}

export default Link;
