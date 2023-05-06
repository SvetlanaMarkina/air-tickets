export const convertTime = (duration: number): string => {
    const result: string = `${Math.floor(duration)} ч ${
      ((Number(duration - Math.floor(duration)) / 100) * 60)
        .toFixed(2)
        .split('.')[1]
    } мин`
    return result
  }