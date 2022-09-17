import { es } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";

export const distanteToNow = (timestamp: number) => {
  return `Hace ${formatDistanceToNow(new Date(timestamp), { locale: es })}`;
};
