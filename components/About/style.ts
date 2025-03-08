// style.ts
export const AboutStyles = {
  content: {
    overflow: "hidden",
    position: "relative",
  },

  section: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  hero: {
    height: "100vh",
  },

  "hero.img": {
    width: "50%",
    aspectRatio: "1",
  },

  main: {
    height: "150vh",
    flexDirection: "column",
    overflow: "hidden",
    marginTop: "20px",
    position: "relative",
  },

  row: {
    position: "relative",
    margin: "1em 0",
    display: "flex",
    justifyContent: "center",
    gap: "2em",
  },

  card: {
    position: "relative",
    width: "350px",
    borderRadius: "0.75em",
    willChange: "transform",
  },

  mainContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  logo: {
    width: "150px",
    height: "150px",
    border: "2px solid white",
    borderRadius: "100%",
    transform: "scale(0)",
  },

  copy: {
    margin: "2em 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  line: {
    position: "relative",
    margin: "0.5em 0",
    width: "max-content",
    height: "28px",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },

  "line p": {
    position: "relative",
    fontSize: "24px",
    transform: "translateY(30px)",
  },

  button: {
    position: "relative",
    padding: "1em 2em",
    fontSize: "18px",
    border: "2px solid white",
    borderRadius: "8em",
    background: "none",
    outline: "none",
    transform: "translateY(30px)",
    opacity: "0",
    color: "#fff",
  },

  mediaMaxWidth900px: {
    card: {
      width: "50%",
      height: "240px",
    },
  },

  cardScrollSection: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    marginTop: "50px",
  },

  scrollCardContainer: {
    display: "flex",
    flexWrap: "nowrap",
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 900,
  },

  scrollCard: {
    flex: "0 0 auto",
    width: "400px",
    height: "auto",
    margin: "0 2px",
    transition: "filter 0.3s ease, transform 0.3s ease",
    position: "relative",
  },

  overlay: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: 2,
    display: "flex",
  },

  bar: {
    width: "50vw",
    height: "105vh",
  },

  ekraw: {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: 10000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  },

  reveal: {
    transform: "translateY(30px)",
  },
} as const;
