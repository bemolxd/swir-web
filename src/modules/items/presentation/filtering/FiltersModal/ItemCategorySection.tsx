import { Divider, VStack } from "@chakra-ui/react";
import { useIntl, defineMessages } from "react-intl";

import { CheckboxFilterGroup } from "components/Filters";

import { ItemCategory } from "modules/items/application";

export const ItemCategorySection = () => {
  const { formatMessage } = useIntl();

  return (
    <VStack align="flex-start" w="100%" mb={2}>
      <CheckboxFilterGroup
        filterName="category"
        title={formatMessage({
          id: "ItemCategoryFilters.title",
          defaultMessage: "Kategoria:",
        })}
        options={options}
        messages={messages}
      />
      <Divider />
    </VStack>
  );
};

const options = Object.values(ItemCategory);

const messages = defineMessages({
  [ItemCategory.AMPLITUNER]: {
    id: "TypeLabels.ItemCategory.Amplituner",
    defaultMessage: "Amplituner",
  },
  [ItemCategory.INTERFACE]: {
    id: "TypeLabels.ItemCategory.Interface",
    defaultMessage: "Interfejs",
  },
  [ItemCategory.MICROPHONE]: {
    id: "TypeLabels.ItemCategory.Microphone",
    defaultMessage: "Mikrofon",
  },
  [ItemCategory.MIXER]: {
    id: "TypeLabels.ItemCategory.Mixer",
    defaultMessage: "Mikser",
  },
  [ItemCategory.SOUND_RECORDER]: {
    id: "TypeLabels.ItemCategory.Sound_recorder",
    defaultMessage: "Rejestrator dźwięku",
  },
  [ItemCategory.SPEAKER]: {
    id: "TypeLabels.ItemCategory.Speaker",
    defaultMessage: "Głośnik",
  },
  [ItemCategory.HEADPHONES]: {
    id: "TypeLabels.ItemCategory.Headphones",
    defaultMessage: "Słuchawki",
  },
  [ItemCategory.DIGITAL_SOUND_PROCESSOR]: {
    id: "TypeLabels.ItemCategory.Digital_sound_processor",
    defaultMessage: "Cyfrowy procesor dźwięku",
  },
  [ItemCategory.PREAMPLIFIER]: {
    id: "TypeLabels.ItemCategory.Preamplifier",
    defaultMessage: "Przedwzmacniacz",
  },
  [ItemCategory.CAMERA]: {
    id: "TypeLabels.ItemCategory.Camera",
    defaultMessage: "Aparat cyfrowy",
  },
  [ItemCategory.VIDEO_CAMERA]: {
    id: "TypeLabels.ItemCategory.Video_camera",
    defaultMessage: "Kamera wideo",
  },
  [ItemCategory.CONVERTER]: {
    id: "TypeLabels.ItemCategory.Converter",
    defaultMessage: "Konwerter",
  },
  [ItemCategory.CAMERA_LENS]: {
    id: "TypeLabels.ItemCategory.Camera_lens",
    defaultMessage: "Obiektyw",
  },
  [ItemCategory.FILTER]: {
    id: "TypeLabels.ItemCategory.Filter",
    defaultMessage: "Filtr",
  },
  [ItemCategory.LIGHTING]: {
    id: "TypeLabels.ItemCategory.Lighting",
    defaultMessage: "Oświetlenie",
  },
  [ItemCategory.PLAYER]: {
    id: "TypeLabels.ItemCategory.Player",
    defaultMessage: "Odtwarzacz",
  },
  [ItemCategory.SCREEN]: {
    id: "TypeLabels.ItemCategory.Screen",
    defaultMessage: "Monitor",
  },
  [ItemCategory.TRIPOD]: {
    id: "TypeLabels.ItemCategory.Tripod",
    defaultMessage: "Statyw",
  },
  [ItemCategory.PROJECTOR]: {
    id: "TypeLabels.ItemCategory.Projector",
    defaultMessage: "Projektor",
  },
  [ItemCategory.GLASSES_3D]: {
    id: "TypeLabels.ItemCategory.Glasses_3d",
    defaultMessage: "Okulary 3D",
  },
  [ItemCategory.OTHER]: {
    id: "TypeLabels.ItemCategory.Other",
    defaultMessage: "Inne",
  },
});
