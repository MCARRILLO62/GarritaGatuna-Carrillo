import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div
      className="d-flex justify-content-center flex-wrap w-100 aos-init"
      data-aos="zoom-out"
    >
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
