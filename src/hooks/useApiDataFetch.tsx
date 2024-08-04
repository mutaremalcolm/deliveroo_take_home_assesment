
import { useEffect, useState } from "react";

type ErrorType = {
  message: string | null;
};

type Menu = {
  MenuSections: {
    MenuSectionId: string;
    Name: string;
    MenuItems: {
      Price: number;
      PublicId: string;
      Name: string;
      Description: string;
      ImageUrl: string;
      MenuItemOptionSets: {
        IsMasterOptionSet: boolean;
        MenuItemOptionSetItems: {
          PublicId: string;
          Name: string;
          Price: number;
        }[];
      }[];
    }[];
  }[];
};

export function useApiDataFetch() {
  const [menuData, setMenuData] = useState<Menu | null>(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setMenuData(data);
        setIsLoading(false);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setError({ message: error.message });
      }
    };

    fetchData();
  }, []);

  return { menuData, loading, error };
}
