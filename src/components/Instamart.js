import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold">{title}</h1>
      {isVisible ? (
        <button
          className="underline"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="underline"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("team");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Duis sollicitudin elementum velit, ac placerat turpis facilisis eu. Fusce iaculis non purus ut finibus. Fusce facilisis venenatis lorem ut viverra. Sed lacus ante, egestas ut lectus in, consequat dictum tortor. In justo dui, tempus id eleifend ut, facilisis sed orci. Vivamus rutrum libero a ex tempus facilisis. Etiam vitae velit tortor. Nam vel interdum purus. Cras vulputate dui id tempus molestie. Nullam vehicula velit sed imperdiet maximus. Morbi malesuada vitae risus non lobortis."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Duis rhoncus congue malesuada. Nunc posuere sodales metus eu ullamcorper. Morbi laoreet ultricies hendrerit. Integer placerat at quam non consectetur. Aenean nec mauris et dui molestie fermentum non imperdiet dui. Proin quam diam, gravida id dolor sed, pellentesque pharetra mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut nisl mauris. Vestibulum consequat, neque quis tempor aliquet, nibh velit auctor tellus, quis pretium erat odio lobortis lacus. Pellentesque ac cursus enim. Maecenas sit amet neque non neque euismod dignissim. Donec scelerisque sem at lobortis euismod. In iaculis gravida urna nec varius."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Careers"}
        description={
          "Duis rhoncus congue malesuada. Nunc posuere sodales metus eu ullamcorper. Morbi laoreet ultricies hendrerit. Integer placerat at quam non consectetur. Aenean nec mauris et dui molestie fermentum non imperdiet dui. Proin quam diam, gravida id dolor sed, pellentesque pharetra mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut nisl mauris. Vestibulum consequat, neque quis tempor aliquet, nibh velit auctor tellus, quis pretium erat odio lobortis lacus. Pellentesque ac cursus enim. Maecenas sit amet neque non neque euismod dignissim. Donec scelerisque sem at lobortis euismod. In iaculis gravida urna nec varius."
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() => setVisibleSection("careers")}
      />
    </div>
  );
};

export default Instamart;
