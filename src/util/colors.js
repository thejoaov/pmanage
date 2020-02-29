export default function colors(theme) {
  const darkTheme = {
    backgroundColor: '#333',
    inactiveBackgroundColor: '#444',
    activeBackgroundColor: '#666',
    activeTintColor: '#fff',
    inactiveTintColor: '#999',
  };
  const lightTheme = {
    backgroundColor: '#fff',
    inactiveBackgroundColor: '#e5e5e5',
    activeBackgroundColor: '#666',
    activeTintColor: '#fff',
    inactiveTintColor: '#999',
  };

  return theme ? darkTheme : lightTheme;
}
