import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

export default function Chat() {
  const theme = {
    background: "#FFD195",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#FF7502",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#FF9D1F",
    botFontColor: "#fff",
    userBubbleColor: "#E18208",
    userFontColor: "#fff",
    height: "150px",
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        
        steps={[
          {
            id: '"1',
            message: "Hello! I'm the food express bot. Write your name to continue",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            validator: (value) => {
              if (/^[a-z]{2,15}$/.test(value)) {
                return true;
              } else {
                return "Por favor un nombre válido";
              }
            },
            trigger: "3",
          },
          {
            id: "3",
            message: "Good morning {previousValue}, how can I help you?",
            trigger: "4",
          },
          {
            id: "4",
            options: [
              { value: 1, label: "Weekend deals", trigger: "6" },
              {
                value: 2,
                label: "I want to drink something?",
                trigger: "5",
              },
              {
                value: 3,
                label: "I want to have lunch?",
                trigger: "8",
              },
              {
                value: 4,
                label: "I want the restaurant contacts",
                trigger: "7",
              },
              {
                value: 5,
                label: 'what are your networks?',
                trigger: '9',
              }
            ],
          },
          {
            id: '5',
            message:
              "My recommendation is Strawberry Lemonade",
            trigger: "4",
          },
        
          {
                id: "6",
            message:
              "Our offers can be found on our page with the offers filter",
            trigger: "4",
          },
          {
            id: "7",
            message: "The Whatsapp of our restaurant is +549387574289",
            trigger: "4",
          },
          {
            id: "8",
            message:
              "My recommendation is the chile de nogada",
            trigger: "4",
          },
          {
            id: '9',
            message:
            'Find us on facebook as Henry pf express and on instagram as henryfoodExpres',
            trigger: '4',
          }
        ]}
      />
    </ThemeProvider>
  );
}