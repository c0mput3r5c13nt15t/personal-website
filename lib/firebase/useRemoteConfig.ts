import {
  fetchAndActivate,
  getRemoteConfig,
  getString,
} from "firebase/remote-config";
import { app } from "@/lib/firebase";
import { useEffect, useState } from "react";

export default function useRemoteConfig<CollectionType>(
  name: string,
  defaultValue: CollectionType
) {
  const [value, setValue] = useState<CollectionType>(defaultValue);

  useEffect(() => {
    const remoteConfig = getRemoteConfig(app);
    if (typeof window !== "undefined") {
      remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

      fetchAndActivate(remoteConfig)
        .then(() => {
          const newValue = getString(remoteConfig, name);

          console.log(newValue);

          if (newValue) {
            // If collection type is string
            if (typeof defaultValue === "string" || typeof defaultValue === "number") {
              setValue(newValue as unknown as CollectionType);
              return;
            }
            setValue(JSON.parse(newValue));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return [value];
}
