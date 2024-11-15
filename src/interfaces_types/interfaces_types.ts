export interface objectInterface {
  id: number;
  name: string;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
  };
  close_approach_data: {
    orbiting_body: string;
  }[];
}

export interface viewedDataContextInterface {
  viewedData: objectInterface[];
  setViewedData: Function;
}

export type visualizedDataType = [string, number | string, number | string][];
