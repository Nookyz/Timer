import { CounterState } from '../../store/slices/state';

export enum BackgroundTheme {
  LightFocus = '#FFF2F2',
  LightShortBreak = '#F2FFF5',
  LightLongBreak = '#F2F9FF',
  DarkFocus = '#0D0404',
  DarkShortBreak = '#040D06',
  DarkLongBreak = '#04090D',
}

export enum TextColor {
  LightFocus = '#471515',
  LightShortBreak = '#14401D',
  LightLongBreak = '#153047',
  DarkFocus = '#FFF2F2',
  DarkShortBreak = '#F2FFF5',
  DarkLongBreak = '#F2F9FF',
}

export enum ButtonColor {
  Focus = 'rgba(255, 76, 76, 0.71)',
  ShortBreak = 'rgba(77, 218, 110, 0.62)',
  LongBreak = 'rgba(76, 172, 255, 0.62)',
}

export enum CommonButtonColor {
  Focus = 'rgba(255, 76, 76, 0.15)',
  ShortBreak = 'rgba(77, 218, 110, 0.15)',
  LongBreak = 'rgba(76, 172, 255, 0.15)',
}

export enum ChipBorderColor {
  LightFocus = '#471515',
  LightShortBreak = '#14401D',
  LightLongBreak = '#153047',
  DarkFocus = '#FFF2F2',
  DarkShortBreak = '#F2FFF5',
  DarkLongBreak = '#F2F9FF',
}

export enum ChipBackgroundColor {
  LightFocus = 'rgba(255, 76, 76, 0.15)',
  LightShortBreak = 'rgba(77, 218, 110, 0.15)',
  LightLongBreak = 'rgba(76, 172, 255, 0.15)',
  DarkFocus = 'rgba(255, 76, 76, 0.15)',
  DarkShortBreak = 'rgba(77, 218, 110, 0.15)',
  DarkLongBreak = 'rgba(76, 172, 255, 0.15)',
}

export enum SwitchBackgroundColor {
  Light = 'rgba(0, 0, 0, 0.24)',
  Dark = 'rgba(255, 255, 255, 0.24)',
}

export enum SwitchTrackColor {
  Light = '#F2F9FF',
  Dark = '#04090D',
}

export enum InputBorderColor {
  Light = 'rgba(0, 0, 0, 0.15)',
  Dark = 'rgba(255, 255, 255, 0.15)',
}

export enum InputArrowColor {
  LightFocus = '#471515',
  LightShortBreak = '#14401D',
  LightLongBreak = '#153047',
  DarkFocus = '#FFF2F2',
  DarkShortBreak = '#F2FFF5',
  DarkLongBreak = '#F2F9FF',
}

interface THEME {
  backgroundColor: BackgroundTheme;
  textColor: TextColor;
  buttons: {
    main: ButtonColor;
    common: CommonButtonColor;
  },
  chip: {
    textColor: ChipBorderColor;
    backgroundColor: ChipBackgroundColor;
    borderColor: ChipBorderColor;
  },
  switch: {
    trackColor: SwitchTrackColor;
    backgroundColor: SwitchBackgroundColor;
  },
  input: {
    borderColor: InputBorderColor;
    arrowColor: InputArrowColor;
    textColor: ChipBorderColor;
  }
}

export const getTheme = (state: CounterState, isDark: boolean): THEME => {
  switch (state) {
    case CounterState.Focus:
      return {
        backgroundColor: isDark ? BackgroundTheme.DarkFocus : BackgroundTheme.LightFocus,
        textColor: isDark ? TextColor.DarkFocus : TextColor.LightFocus,
        buttons: {
          main: ButtonColor.Focus,
          common: CommonButtonColor.Focus,
        },
        chip: {
          textColor: isDark ? ChipBorderColor.DarkFocus : ChipBorderColor.LightFocus,
          backgroundColor: isDark ? ChipBackgroundColor.DarkFocus : ChipBackgroundColor.LightFocus,
          borderColor: isDark ? ChipBorderColor.DarkFocus : ChipBorderColor.LightFocus,
        },
        switch: {
          trackColor: isDark ? SwitchTrackColor.Dark : SwitchTrackColor.Light,
          backgroundColor: isDark ? SwitchBackgroundColor.Dark : SwitchBackgroundColor.Light,
        },
        input: {
          borderColor: isDark ? InputBorderColor.Dark : InputBorderColor.Light,
          arrowColor: isDark ? InputArrowColor.DarkFocus : InputArrowColor.LightFocus,
          textColor: isDark ? ChipBorderColor.DarkFocus : ChipBorderColor.LightFocus,
        },
      };
    case CounterState.ShortBreak:
      return {
        backgroundColor: isDark ? BackgroundTheme.DarkShortBreak : BackgroundTheme.LightShortBreak,
        textColor: isDark ? TextColor.DarkShortBreak : TextColor.LightShortBreak,
        buttons: {
          main: ButtonColor.ShortBreak,
          common: CommonButtonColor.ShortBreak,
        },
        chip: {
          textColor: isDark ? ChipBorderColor.DarkShortBreak : ChipBorderColor.LightShortBreak,
          backgroundColor: isDark
            ? ChipBackgroundColor.DarkShortBreak : ChipBackgroundColor.LightShortBreak,
          borderColor: isDark ? ChipBorderColor.DarkShortBreak : ChipBorderColor.LightShortBreak,
        },
        switch: {
          trackColor: isDark ? SwitchTrackColor.Dark : SwitchTrackColor.Light,
          backgroundColor: isDark ? SwitchBackgroundColor.Dark : SwitchBackgroundColor.Light,
        },
        input: {
          borderColor: isDark ? InputBorderColor.Dark : InputBorderColor.Light,
          arrowColor: isDark ? InputArrowColor.DarkShortBreak : InputArrowColor.LightShortBreak,
          textColor: isDark ? ChipBorderColor.DarkShortBreak : ChipBorderColor.LightShortBreak,
        },
      };
    case CounterState.LongBreak:
      return {
        backgroundColor: isDark ? BackgroundTheme.DarkLongBreak : BackgroundTheme.LightLongBreak,
        textColor: isDark ? TextColor.DarkLongBreak : TextColor.LightLongBreak,
        buttons: {
          main: ButtonColor.LongBreak,
          common: CommonButtonColor.LongBreak,
        },
        chip: {
          textColor: isDark ? ChipBorderColor.DarkShortBreak : ChipBorderColor.LightLongBreak,
          backgroundColor: isDark
            ? ChipBackgroundColor.DarkShortBreak : ChipBackgroundColor.LightLongBreak,
          borderColor: isDark ? ChipBorderColor.DarkShortBreak : ChipBorderColor.LightLongBreak,
        },
        switch: {
          trackColor: isDark ? SwitchTrackColor.Dark : SwitchTrackColor.Light,
          backgroundColor: isDark ? SwitchBackgroundColor.Dark : SwitchBackgroundColor.Light,
        },
        input: {
          borderColor: isDark ? InputBorderColor.Dark : InputBorderColor.Light,
          arrowColor: isDark ? InputArrowColor.DarkLongBreak : InputArrowColor.LightLongBreak,
          textColor: isDark ? ChipBorderColor.DarkShortBreak : ChipBorderColor.LightLongBreak,
        },
      };
    default: return {
      backgroundColor: BackgroundTheme.LightFocus,
      textColor: TextColor.LightFocus,
      buttons: {
        main: ButtonColor.Focus,
        common: CommonButtonColor.Focus,
      },
      chip: {
        textColor: ChipBorderColor.LightFocus,
        backgroundColor: ChipBackgroundColor.LightFocus,
        borderColor: ChipBorderColor.LightFocus,
      },
      switch: {
        trackColor: SwitchTrackColor.Light,
        backgroundColor: SwitchBackgroundColor.Light,
      },
      input: {
        borderColor: InputBorderColor.Light,
        arrowColor: InputArrowColor.LightLongBreak,
        textColor: ChipBorderColor.LightFocus,
      },
    };
  }
};
