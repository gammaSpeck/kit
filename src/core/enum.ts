export enum Mode {
  FILTER = "FILTER",
  GENERATE = "GENERATE",
  HOTKEY = "HOTKEY",
  MANUAL = "MANUAL",
  CUSTOM = "CUSTOM",
}

export enum Channel {
  ABANDON = "ABANDON",
  APP_CONFIG = "APP_CONFIG",
  CHOICE_FOCUSED = "CHOICE_FOCUSED",
  CLEAR_CACHE = "CLEAR_CACHE",
  CLEAR_PROMPT_CACHE = "CLEAR_PROMPT_CACHE",
  CLEAR_PREVIEW = "CLEAR_PREVIEW",
  CLEAR_CLIPBOARD_HISTORY = "CLEAR_CLIPBOARD_HISTORY",
  CONSOLE_CLEAR = "CONSOLE_CLEAR",
  CONSOLE_LOG = "CONSOLE_LOG",
  CONSOLE_WARN = "CONSOLE_WARN",
  CONTENT_HEIGHT_UPDATED = "CONTENT_HEIGHT_UPDATED",
  CONTENT_SIZE_UPDATED = "CONTENT_SIZE_UPDATED",
  COPY_PATH_AS_PICTURE = "COPY_PATH_AS_PICTURE",
  CREATE_KENV = "CREATE_KENV",
  SET_TRAY = "SET_TRAY",
  DEV_TOOLS = "DEV_TOOLS",
  ESCAPE_PRESSED = "ESCAPE_PRESSED",
  EXIT = "EXIT",
  FLAG_SUBMITTED = "FLAG_SUBMITTED",
  GENERATE_CHOICES = "GENERATE_CHOICES",
  GET_BACKGROUND = "GET_BACKGROUND",
  GET_BOUNDS = "GET_BOUNDS",
  GET_EDITOR_HISTORY = "GET_EDITOR_HISTORY",
  GET_CLIPBOARD_HISTORY = "GET_CLIPBOARD_HISTORY",
  GET_MOUSE = "GET_MOUSE",
  GET_PROCESSES = "GET_PROCESSES",
  GET_SCHEDULE = "GET_SCHEDULE",
  GET_SCREEN_INFO = "GET_SCREEN_INFO",
  GET_SCRIPTS_STATE = "GET_SCRIPTS_STATE",
  GET_SERVER_STATE = "GET_SERVER_STATE",
  GROW_PROMPT = "GROW_PROMPT",
  HIDE_APP = "HIDE_APP",
  KIT_LOG = "KIT_LOG",
  KIT_CLEAR = "KIT_CLEAR",
  KIT_WARN = "KIT_WARN",
  NEEDS_RESTART = "NEEDS_RESTART",
  OPEN_KIT_LOG = "OPEN_KIT_LOG",
  BLUR = "BLUR",
  PROMPT_BOUNDS_UPDATED = "PROMPT_BOUNDS_UPDATED",
  PROMPT_ERROR = "PROMPT_ERROR",
  QUIT_APP = "QUIT_APP",
  RESET_PROMPT = "RESET_PROMPT",
  REMOVE_CLIPBOARD_HISTORY_ITEM = "REMOVE_CLIPBOARD_HISTORY_ITEM",
  RUN_SCRIPT = "RUN_SCRIPT",
  SEND_RESPONSE = "SEND_RESPONSE",
  SEND_KEYSTROKE = "SEND_KEYSTROKE",
  SET_BOUNDS = "SET_BOUNDS",
  SET_CHOICES = "SET_CHOICES",
  SET_DESCRIPTION = "SET_DESCRIPTION",
  SET_EDITOR_CONFIG = "SET_EDITOR_CONFIG",
  SET_FLAGS = "SET_FLAGS",
  SET_DIV_HTML = "SET_DIV_HTML",
  SET_FILTER_INPUT = "SET_FILTER_INPUT",
  SET_FOCUSED = "SET_FOCUSED",
  SET_FOOTER = "SET_FOOTER",
  SET_FORM_HTML = "SET_FORM_HTML",
  SET_HINT = "SET_HINT",
  SET_IGNORE_BLUR = "SET_IGNORE_BLUR",
  SET_INPUT = "SET_INPUT",
  SET_LOADING = "SET_LOADING",
  SET_LOG = "SET_LOG",
  SET_LOGO = "SET_LOGO",
  SET_LOGIN = "SET_LOGIN",
  SET_NAME = "SET_NAME",
  SET_MAIN_HEIGHT = "SET_MAIN_HEIGHT",
  SET_MAX_HEIGHT = "SET_MAX_HEIGHT",
  SET_MODE = "SET_MODE",
  SET_OPEN = "SET_OPEN",
  SET_PANEL = "SET_PANEL",
  SET_PID = "SET_PID",
  SET_PLACEHOLDER = "SET_PLACEHOLDER",
  SET_PREVIEW = "SET_PREVIEW",
  SET_PREVIEW_ENABLED = "SET_PREVIEW_ENABLED",
  SET_PROMPT_BLURRED = "SET_PROMPT_BLURRED",
  SET_PROMPT_BOUNDS = "SET_PROMPT_BOUNDS",
  SET_PROMPT_DATA = "SET_PROMPT_DATA",
  SET_PROMPT_PROP = "SET_PROMPT_PROP",
  SET_READY = "SET_READY",
  SET_SCRIPT = "SET_SCRIPT",
  SET_SCRIPT_HISTORY = "SET_SCRIPT_HISTORY",
  SET_SPLASH_BODY = "SET_SPLASH_BODY",
  SET_SPLASH_HEADER = "SET_SPLASH_HEADER",
  SET_SPLASH_PROGRESS = "SET_SPLASH_PROGRESS",
  SET_SUBMIT_VALUE = "SET_SUBMIT_VALUE",
  SET_TAB_INDEX = "SET_TAB_INDEX",
  SET_TEXTAREA_CONFIG = "SET_TEXTAREA_CONFIG",
  SET_TEXTAREA_VALUE = "SET_TEXTAREA_VALUE",
  SET_THEME = "SET_THEME",
  SET_TOP_HEIGHT = "SET_TOP_HEIGHT",
  SET_UNFILTERED_CHOICES = "SET_UNFILTERED_CHOICES",
  START = "START",
  SHOW = "SHOW",
  SHOW_IMAGE = "SHOW_IMAGE",
  SHOW_NOTIFICATION = "SHOW_NOTIFICATION",
  SHOW_TEXT = "SHOW_TEXT",
  SHRINK_PROMPT = "SHRINK_PROMPT",
  SWITCH_KENV = "SWITCH_KENV",
  TAB_CHANGED = "TAB_CHANGED",
  TERMINAL = "TERMINAL",
  TOAST = "TOAST",
  TOGGLE_BACKGROUND = "TOGGLE_BACKGROUND",
  TOGGLE_TRAY = "TOGGLE_TRAY",
  UPDATE_APP = "UPDATE_APP",
  UPDATE_PROMPT_WARN = "UPDATE_PROMPT_WARN",
  USER_RESIZED = "USER_RESIZED",
  VALUE_SUBMITTED = "VALUE_SUBMITTED",
  VALUE_INVALID = "VALUE_INVALID",
  NO_CHOICES = "NO_CHOICES",
  CHOICES = "CHOICES",
  ESCAPE = "ESCAPE",
  BACK = "BACK",
  FORWARD = "FORWARD",
  UP = "UP",
  DOWN = "DOWN",
  TAB = "TAB",
  INPUT = "INPUT",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  NOTIFY = "NOTIFY",
  WIDGET_GET = "WIDGET_GET",
  WIDGET_CAPTURE_PAGE = "WIDGET_CAPTURE_PAGE",
  WIDGET_END = "WIDGET_END",
  WIDGET_UPDATE = "WIDGET_UPDATE",
  WIDGET_SET_STATE = "WIDGET_SET_STATE",
  WIDGET_CLICK = "WIDGET_CLICK",
  WIDGET_INPUT = "WIDGET_INPUT",
  TERMINATE_PROCESS = "TERMINATE_PROCESS",
  WIDGET_RESIZED = "WIDGET_RESIZED",
  WIDGET_MOVED = "WIDGET_MOVED",
  WIDGET_SET_POSITION = "WIDGET_SET_POSITION",
  WIDGET_SET_SIZE = "WIDGET_SET_SIZE",
  WIDGET_FIT = "WIDGET_FIT",
  WIDGET_INIT = "WIDGET_INIT",
}

export enum ProcessType {
  App = "App",
  Background = "Background",
  Prompt = "Prompt",
  Schedule = "Schedule",
  System = "System",
  Watch = "Watch",
}

export enum ErrorAction {
  Ask = "Ask",
  KitLog = "KitLog",
  Log = "Log",
  Open = "Open",
  CopySyncPath = "CopySyncPath",
}

export enum ProcessState {
  Active = "Active",
  Idle = "Idle",
}

export enum UI {
  none = "none",
  arg = "arg",
  textarea = "textarea",
  hotkey = "hotkey",
  drop = "drop",
  editor = "editor",
  form = "form",
  div = "div",
  log = "log",
  splash = "splash",
  input = "input",
  term = "term",
}

export enum Bin {
  cli = "cli",
  scripts = "scripts",
}

export enum Secret {
  password = "password",
  text = "text",
}

export enum Value {
  NoValue = "__NoValue__",
}
