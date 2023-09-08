export default function Stats({items}) {
  //early return case to skip calculations
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding items to yout list! ✍️</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? "All done! Have fun 🙌"
          : `🎒 You have ${numItems} items on your list and you've already packed ${numPacked} (${percentage}%) 🏷️`}
      </em>
    </footer>
  );
}
