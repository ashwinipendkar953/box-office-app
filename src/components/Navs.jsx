import { Link } from 'react-router-dom';
const Navs = () => {
  const LINKS = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Starred',
      to: '/starred',
    },
  ];
  return (
    <div>
      <ul>
        {LINKS.map(items => (
          <li key={items.to}>
            <Link to={items.to}>{items.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
