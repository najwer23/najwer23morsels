export function getCssVariableStyle(vars: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(vars).filter(([_, v]) => v !== undefined && v !== null));
}
