import { Stack, Text } from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

export const MainInfo = () => {
  const { formatMessage } = useIntl();

  return (
    <Stack textAlign="justify">
      <Text>{formatMessage(messages.owner)}</Text>
      <Text>{formatMessage(messages.takingCare)}</Text>
      <Text>{formatMessage(messages.user)}</Text>
      <Text>{formatMessage(messages.rules)}</Text>
      <Text>{formatMessage(messages.admin)}</Text>
    </Stack>
  );
};

const messages = defineMessages({
  owner: {
    id: "Privacy.MainInfo.owner",
    defaultMessage:
      "Właścicielem strony internetowej System Wypożyczeń i Rezerwacji jest Katedra Systemów Multimedialnych, która jest administratorem Twoich danych osobowych.",
  },
  takingCare: {
    id: "Privacy.MainInfo.takingCare",
    defaultMessage:
      "Dla Właściciela oraz Administratora niniejszego Systemu, ochrona danych osobowych Użytkowników jest sprawą najwyższej wagi. Dokładają oni ogrom starań, aby Użytkownicy czuli się bezpiecznie, powierzając swoje dane osobowe w trakcie korzystania z Systemu.",
  },
  user: {
    id: "Privacy.MainInfo.user",
    defaultMessage:
      "Użytkownik to osoba fizyczna, osoba prawna albo jednostka organizacyjna, nieposiadająca osobowości prawnej, której ustawa przyznaje zdolność prawną, korzystająca z usług elektronicznych, dostępnych w ramach Systemu.",
  },
  rules: {
    id: "Privacy.MainInfo.rules",
    defaultMessage:
      "Niniejsza polityka prywatności wyjaśnia zasady i zakres przetwarzania danych osobowych Użytkownika, przysługujące mu prawa, jak też obowiązki Administratora tych danych, a także informuje o używaniu plików cookies.",
  },
  admin: {
    id: "Privacy.MainInfo.admin",
    defaultMessage:
      "Administrator stosuje najnowocześniejsze środki techniczne i rozwiązania organizacyjne, zapewniające wysoki poziom ochrony przetwarzanych danych osobowych oraz zabezpieczenia przed dostępem osób nieupoważnionych.",
  },
});
