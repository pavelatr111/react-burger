function Link({ lclass, href, icon, paragraphClass, text }) {
  return (
    <a className={lclass} href={href}>
      {icon} <p className={paragraphClass}>{text}</p>
    </a>
  );
}

export default Link;
