"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function useCalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const openCal = () => {
    getCalApi({ namespace: "30min" }).then((cal) => {
      cal("modal", {
        calLink: "infrastackai/30min",
        config: { layout: "month_view" },
      });
    });
  };

  return openCal;
}
