import {
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
} from 'react-native';

export enum MARGIN_SIZES {
  tiny = 'tiny',
  small = 'small',
  small2 = 'small2',
  medium = 'medium',
  big = 'big',
  large = 'large',
}
export enum MODAL_ANIMATION_STYLES {
  none = 'none',
  slide = 'slide',
  fade = 'fade',
}

export interface GeometryCoordinates {
  lat: number;
  lng: number;
}

/**google place search response */
export interface PlaceSearchResponse {
  name: string;
  formatted_address: string;
  place_id: string;
  geometry: {
    location: GeometryCoordinates;
  };
}

export type TimeoutType = ReturnType<typeof setTimeout>;

export interface TouchableProps
  extends TouchableNativeFeedbackProps,
    TouchableOpacityProps {}

/** common style modes  */
export enum MODES {
  primary = 'primary',
  secondary = 'secondary',
}
